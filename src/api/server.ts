export const server_calls = {
    get: async () => {
        const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts`,
        {
            method: 'GET',
            mode: "cors",
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://plankton-app-46k8b.ondigitalocean.app/api/contacts/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    },
    delete: async(id:string) => {
        const response = await fetch(`http://127.0.0.1:5000/api/contacts/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}