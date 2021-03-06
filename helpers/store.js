import create from 'zustand'

const useStore = create((set) => ({
	data: {},
	prompt:
		'In der Reihe "In/Transparenz" stellen wir Menschen vor, die erstaunlichen Berufen nachgehen. Diese Berufe haben im weitesten Sinne mit Transparenz und Intransparenz zu tun. Wir haben diesen Menschen Fragen gestellt zu Durchsichtigkeit, Authentizität, Offenheit, Lügen, Verschleiern, Verstecken. Manchmal haben wir aber auch eine völlig absurde Frage gestellt. Dabei waren wir immer höflich, freundlich und humorvoll. Dieser Artikel ist Teil von JENNY, dem Magazin der Sprachkunst Wien 22/2022.',
	isLoading: false,
	chatLog: {}
}))

export default useStore
