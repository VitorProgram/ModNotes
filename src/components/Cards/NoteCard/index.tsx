import * as Dialog from '@radix-ui/react-dialog'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { XCircle } from 'lucide-react'
import { CardActionButton, CardElement, CloseModalButton, GradientContainer, ModalContainter, ModalContent, ModalContentContainer, ModalOverlay, Paragraph, SpanAlert, Title } from '../Cards.style'

interface NoteCardProps {
    note: {
        id: string
        date: Date,
        content: string
    },
    onNoteDeleted: (id: string) => void
}

function NoteCard ({ note, onNoteDeleted } : NoteCardProps) {
    return (
        <Dialog.Root>
            {/* Componentes principais */}
            <CardElement className='noteCard'>
                <Title className='noteTitle'>
                    {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true})}
                </Title>

                <Paragraph>
                    { note.content }
                </Paragraph>
                <GradientContainer />
            </CardElement>

            {/* Componentes do modal */}
            <ModalContainter>
                <ModalOverlay />

                <ModalContentContainer>
                    <CloseModalButton>
                        <XCircle />
                    </CloseModalButton>

                    <ModalContent>
                        <Title className='noteTitle'>
                            {formatDistanceToNow(note.date, { locale: ptBR, addSuffix: true})}
                        </Title>

                        <Paragraph>
                            { note.content }
                        </Paragraph>
                    </ModalContent>

                    <CardActionButton
                        className='deleteNoteButton'
                        type='button'
                        onClick={() => onNoteDeleted(note.id)}
                    >
                        Deseja <SpanAlert>apagar essa nota?</SpanAlert>
                    </CardActionButton>
                </ModalContentContainer>
            </ModalContainter>
        </Dialog.Root>
    )
} 

export default NoteCard