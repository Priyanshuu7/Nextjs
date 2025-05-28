import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { handleSubmit } from "@/app/actions";
import { Submitbutton } from "@/components/general/SubmitButton"


export default function () {
    return (
        <div>
            <Card className="max-w-lg mx-auto">
                <CardHeader>
                    <CardTitle>Create A New Post </CardTitle>
                    <CardDescription>
                        Create a post to share with the world
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form className="flex flex-col gap-4" action={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <Label>Title</Label>
                            <Input name="title" required type="text" placeholder="Title" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label>Description</Label>
                            <Textarea name="content" required placeholder="Add description"  />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label>ImageUrl</Label>
                            <Input name="url" required type="url" placeholder="Add Image Url"  />
                        </div>
                        <Submitbutton/>
                    </form>
                </CardContent>

            </Card>
        </div>

    )
}