import InitialModal from "@/components/modal/InitialModal"
import { initialProfile } from "@/lib/InitialProfile"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"



const setUpPage = async () => {
    const profile = await initialProfile()
    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    })
    if(server) return redirect(`/servers/${server.id}`)
    return (
       <InitialModal/>
    )
}

export default setUpPage

