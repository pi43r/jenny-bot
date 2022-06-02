import create from 'zustand'

const useStore = create((set) => ({
	data: {},
	prompt:
		'In der Reihe "In/Transparenz" stellen wir Menschen vor, die erstaunlichen Berufen nachgehen. Diese Berufe haben im weitesten Sinne mit Transparenz, Durchsichtigkeit, Authentizität, Offenheit, Lügen, Verschleiern, Verstecken zu tun. Wir haben diese Menschen mit absurden Fragen konfrontiert und uns dabei manchmal etwas verplaudert. Dabei waren wir aber immer höflich, freundlich und humorvoll. Dieser Artikel ist Teil von JENNY, dem Magazin der Sprachkunst Wien 22/2022.',
	isLoading: false,
	chatLog: {}
}))

export default useStore
