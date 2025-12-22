import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Definition {
    id: number
    text: string
    selected: boolean
}

export default function Home() {
    const [word, setWord] = useState("")
    const [pronunciation, setPronunciation] = useState("")
    const [definitions, setDefinitions] = useState<Definition[]>([])

    const fetchDefinition = async () => {
        if (!word) return
        const fetchedDefinitions: Definition[] = [
            { id: 1, text: `Definition of ${word}`, selected: false },
            { id: 2, text: `Another meaning of ${word}`, selected: false },
        ]
        setDefinitions(fetchedDefinitions)
    }

    const toggleSelect = (id: number) => {
        setDefinitions((defs) =>
            defs.map((d) => (d.id === id ? { ...d, selected: !d.selected } : d))
        )
    }

    const addToAnki = () => {
        const selectedDefs = definitions.filter((d) => d.selected)
        console.log("Adding to Anki:", { word, pronunciation, definitions: selectedDefs })
        alert(`Added ${selectedDefs.length} definitions for "${word}" to Anki!`)
    }

    return (
        <div className="p-4 max-w-2xl mx-auto space-y-4">
            <fieldset className="border border-gray-300 rounded-md p-4 dark:border-gray-700">
                <legend className="text-lg font-bold">WordTank</legend>

                <div className="flex gap-2 mb-2">
                    <Input
                        placeholder="Word"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <Button onClick={fetchDefinition}>Get Definition</Button>
                </div>

                <div className="mb-2">
                    <Input
                        placeholder="Pronunciation"
                        value={pronunciation}
                        onChange={(e) => setPronunciation(e.target.value)}
                    />
                </div>
            </fieldset>

            {definitions.length > 0 && (
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                    <thead className="bg-gray-100 dark:bg-gray-800">
                        <tr>
                            <th className="border border-gray-300 dark:border-gray-700 p-2">Select</th>
                            <th className="border border-gray-300 dark:border-gray-700 p-2">Definition</th>
                        </tr>
                    </thead>
                    <tbody>
                        {definitions.map((def) => (
                            <tr key={def.id}>
                                <td className="border border-gray-300 dark:border-gray-700 p-2 text-center">
                                    <input
                                        type="checkbox"
                                        checked={def.selected}
                                        onChange={() => toggleSelect(def.id)}
                                    />
                                </td>
                                <td className="border border-gray-300 dark:border-gray-700 p-2">
                                    {def.text}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <Button onClick={addToAnki} variant="default">
                Add to Anki
            </Button>
        </div>
    )
}