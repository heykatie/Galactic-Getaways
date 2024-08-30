import { useRef, createContext } from 'react';

const ModalContext = createContext();

export function ModalProvider({ children }) {
	const modalRef = useRef();

	return (
		<>
			<ModalContext.Provider>{children}</ModalContext.Provider>
			<div ref={modalRef} />
		</>
	);
}

//this is dev