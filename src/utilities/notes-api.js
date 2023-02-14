const BASE_URL = '/api/notes'

export async function createNote(noteData) {
// pausing code to wait for a response back from the server
     const res = await fetch(BASE_URL, {
        // I want to make a user
        method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(noteData)
     })

    // // if success
    // // we get a true here when the status is 200
    if (res.ok) {
     return res.json()
     } else {
	//	// if error throw new error
	 	throw new Error('Invalid to. create note')
	 }
}


export default async function indexNote() {
    const res = await fetch(BASE_URL)
    if (res.ok) {
        return res.json()
    } else {
        throw new Error('Bad Request')
    }
}

export async function checkToken() {
    return sendRequest(BASE_URL + '/check-token')
}
