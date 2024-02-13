import { ChangeEvent, useState } from 'react'
import logo from '../../assets/logo-mod-notes.svg'
import NewNoteCard from '../Cards/NewNoteCard'
import NoteCard from '../Cards/NoteCard'
import { ContainerCards, ContainerElement, ContainerImg, Form, HorizontalDivider, Img, Input } from './Container.style'
import { toast } from 'sonner'

interface Note {
    id: string,
    date: Date
    content: string
}

function Container () {
    const [ search, setSearch ] = useState('')
    const [notes, setNotes] = useState<Note[]>(() => {
        const notesOnStorage = localStorage.getItem('notes')
    
        if (notesOnStorage) {
            return JSON.parse(notesOnStorage)
        }

        return []
    })

    function onNoteCreated (content: string) {
        const newNote = {
            id: crypto.randomUUID(),
            date: new Date(),
            content,
        }

        const notesArray = [newNote, ...notes]

        setNotes(notesArray)

        localStorage.setItem('notes', JSON.stringify(notesArray))
    }

    function onNoteDeleted (id: string) {
        const notesArray = notes.filter(note => {
            return note.id != id
        })

        setNotes(notesArray)
        localStorage.setItem('notes', JSON.stringify(notesArray))
        toast.info('Sua nota foi deletada.')
    }

    function handleSearch (event: ChangeEvent<HTMLInputElement>) {
        const query = event.target.value
        setSearch(query)
    }

    const filteredNotes = search != '' ? notes.filter(note => note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())) : notes

    return (
        <ContainerElement>
            <ContainerImg>    
                <Img
                    src={ logo } 
                    alt="Logo ModNotes" 
                    title="ModNotes"
                />
            </ContainerImg>
            <Form>
                <Input
                    type='text'
                    id='search'
                    placeholder='Busque em suas notas...'
                    onChange={handleSearch}
                />
            </Form>

            <HorizontalDivider />

            <ContainerCards>
                <NewNoteCard onNoteCreated={onNoteCreated}/>

                { filteredNotes.map(note => {
                    return <NoteCard key={note.id} note={note} onNoteDeleted={onNoteDeleted}/>
                })}
            </ContainerCards>
        </ContainerElement>
    )
}

export default Container