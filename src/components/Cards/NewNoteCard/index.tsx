import { XCircle } from "lucide-react"
import * as Dialog from '@radix-ui/react-dialog'
import { CardActionButton, CardElement, CloseModalButton, CreateNoteButton, FormCard, ImgRecordingNote, ModalContainter, ModalContent, ModalContentContainer, ModalOverlay, NoteTextarea, Paragraph, Title } from "../Cards.style"
import { ChangeEvent, FormEvent, useState } from "react"
import { toast } from 'sonner'

interface NewNoteCardProps {
    onNoteCreated: (content: string) => void
}

let speechRecognition: SpeechRecognition | null = null

function NewNoteCard ({ onNoteCreated } : NewNoteCardProps) {
    const [ isModalOpen, setIsModalOpen ] = useState(false)
    const [shouldShowOnBoarding, setShouldShowOnBoarding] = useState(true)
    const [ content, setContent ] = useState('')
    const [ isRecording, setIsRecording ] = useState(false)

    function handleStartEditor () {
        setIsRecording(false)
        setShouldShowOnBoarding(false)
    }
    
    function handleStartRecording () {
        setContent('')
        const isSpeechRecognitionAPIAvaiable =  'SpeechRecognition' in window || 'webkitSpeechRecognition'

        if (!isSpeechRecognitionAPIAvaiable) {
            toast.error('Seu navegador não suporta essa funcionalidade :(')
            return
        }

        setIsRecording(true)
        setShouldShowOnBoarding(false)

        const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition

        speechRecognition = new SpeechRecognitionAPI()
        speechRecognition.lang = 'pt-BR'
        speechRecognition.continuous = true
        speechRecognition.maxAlternatives = 1
        speechRecognition.interimResults = true

        speechRecognition.onresult = (event) => {
            const transcription = Array.from(event.results).reduce((text, result) => {
                return text.concat(result[0].transcript)
            }, '')

            console.log('Gravação iniciada.')
            setContent(transcription)
        }

        speechRecognition.onerror = (event) => {
            console.error(event)
        }

        speechRecognition.start()
    }

    function handleStopRecording () {
        
        if (speechRecognition != null) {
            speechRecognition?.stop()
            console.log('Gravação finalizada.')
        }
        
        content != '' ? setShouldShowOnBoarding(false) : setShouldShowOnBoarding(true) 
        setIsRecording(false)
    }
    
    function handleContentChange (event: ChangeEvent<HTMLTextAreaElement>) {
        setContent(event.target.value)

        if (event.target.value === '') {
            setShouldShowOnBoarding(true)
        }
    }

    function handleSaveNote (event: FormEvent) {
        event.preventDefault()

        try {
            if (content == '') {
                toast.error('Sua nota está vazia. Escreva algo.')
                return
            }

            onNoteCreated(content)
            toast.success('Nota criada com sucesso!')
        }
        catch (error) {
            toast.error('Ocorreu um erro ao criar sua nota. Tente novamente.')
            console.log(error)
        }

        setShouldShowOnBoarding(true)
        setIsModalOpen(false)
        setContent('')
    }



    return (
        <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
            {/* Componentes principais */}
            <CardElement className='newNoteCard'>
                <Title className="newNoteTitle">
                    Adicionar nota
                </Title>

                <Paragraph>
                    Grave uma nota em áudio que será convertida para texto automaticamente.
                </Paragraph>
            </CardElement>

            {/* Configuração do modal */}
            <ModalContainter>
                <ModalOverlay />

                <ModalContentContainer>
                    <CloseModalButton onClick={() => {
                        setIsRecording(false)
                        setShouldShowOnBoarding(true)
                    }}>
                        <XCircle />
                    </CloseModalButton>

                    <FormCard>
                        <ModalContent>
                            <Title className='newNoteTitle'>
                                Adicionar nota
                            </Title>

                            { shouldShowOnBoarding ? (
                                <Paragraph>
                                    Comece <CreateNoteButton type="button" onClick={handleStartRecording}>gravando uma nota</CreateNoteButton> em áudio ou se preferir <CreateNoteButton type="button" onClick={handleStartEditor}>utilize apenas texto</CreateNoteButton>.
                                </Paragraph>
                            ) : (
                                <NoteTextarea 
                                    autoFocus
                                    onChange={handleContentChange}
                                    value={content}
                                >
                                </NoteTextarea>
                            )}
                        </ModalContent>

                        { isRecording ? (
                            <CardActionButton
                                className='recordingNoteButton'
                                type='button'
                                onClick={handleStopRecording}
                            >
                                <ImgRecordingNote />
                                Gravando! (clique p/ interromper)
                            </CardActionButton>
                        ) : (
                            <CardActionButton
                                className='saveNoteButton'
                                type='button'
                                onClick={handleSaveNote}
                            >
                                Salvar nota
                            </CardActionButton>                           
                        )}
                    </FormCard>
                </ModalContentContainer>
            </ModalContainter>
        </Dialog.Root>
    )
}

export default NewNoteCard