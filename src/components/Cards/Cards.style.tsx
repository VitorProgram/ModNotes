import * as Dialog from "@radix-ui/react-dialog";
import { Disc } from "lucide-react";
import styled, { keyframes } from "styled-components";

const animationBorderNote = keyframes`
    0%, 100% {
        box-shadow: none;
    }
    50% {
        box-shadow: 0 0 0 2px #a3e635;
    }
`
const animationColorRecording = keyframes`
    0%, 100% {
        color: #b91c1c;
    }
    50% {
        color: #e11d48;
    }
`

export const CardElement = styled(Dialog.Trigger)`
    &.newNoteCard {
        background: #334155;
    }
    &.noteCard {
        background: #1e293b;
        animation: ${animationBorderNote} 1s 3;
    }

    border-radius: 6px;
    padding: 20px;
    overflow: hidden;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 12px;
    position: relative;

    outline: none;
    cursor: pointer;
    border: none;

    &:hover {
        box-shadow: 0 0 0 2px #475569;
    }
    &:focus-visible {
        box-shadow: 0 0 0 2px #a3e635;
    }
`

export const Title = styled.span`
    &.newNoteTitle {
        color: #e2e8f0;
    }
    &.noteTitle {
        color: #cbd5e1;
    }

    font-weight: 500;
    font-size: 14px;
`

export const Paragraph = styled.p`
    color: #94a3b8;
    font-size: 14px;
    line-height: 24px;
`

export const GradientContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
`

export const ModalContainter = styled(Dialog.Portal)``

export const ModalOverlay = styled(Dialog.Overlay)`
    inset: 0;
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
`

export const ModalContentContainer = styled(Dialog.Content)`
    z-index: 100; 
    width: 100%;
    inset: 0;
    position: fixed;
    
    @media (min-width: 784px) {
        inset: auto;
        left: 50%;
        top: 50%; 
        height: 60vh;
        max-width: 640px;
        transform: translate(-50%, -50%);
        border-radius: 6px;
    }

    overflow: hidden;
    outline: none;
    
    background: #334155;

    display: flex;
    flex-direction: column;
`

export const FormCard = styled.form`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 12px;
    padding: 20px;
    overflow-y: scroll;
    
    &::-webkit-scrollbar {
        width: 6px;   
    }
    &::-webkit-scrollbar-thumb {
        background-color: #1e293b;
        border-radius: 6px;
  }
`

export const SpanAlert = styled.span`
    color: #ef4444;
`

export const CreateNoteButton = styled.button`
    color: #a3e635;
    font-weight: 500;
    border: none;
    background: none;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

export const CardActionButton = styled.button`
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;

    cursor: pointer;
    padding: 1rem 0;
    border: none;
    font-size: 14px;
    font-weight: 500;

    &.deleteNoteButton, &.recordingNoteButton {
        background: #1e293b;
        color: #cbd5e1;
    }
    &.deleteNoteButton:hover ${SpanAlert} {
        text-decoration: underline;
    }

    &.recordingNoteButton:hover {
        color: #f1f5f9;
    }

    &.saveNoteButton {
        background: #a3e635;
        color: #1a2e05;
        transition: all .3s;
    }
    &.saveNoteButton:hover {
        background: #84cc16;
        color: #f7fee7;
    }
`
export const ImgRecordingNote = styled(Disc)`
    animation: ${animationColorRecording} 2.5s infinite ease-in-out;
`

export const CloseModalButton = styled(Dialog.Close)`
    padding: 5px;
    background: transparent;
    color: #94a3b8;
    font-size: 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    
    position: absolute;
    top: 0;
    right: 0;
    margin-top: .5rem;
    margin-right: .5rem;
    
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: .3s all;

    &:hover {
        background: rgba(0, 0, 0, 0.3);
        color: #cbd5e1;
    }
`

export const NoteTextarea = styled.textarea`
    font-size: 14px;
    line-height: 1.5rem;

    color: #94a3b8;
    background: none;

    resize: none;
    flex: 1;
    outline: none;
    border: none;
`