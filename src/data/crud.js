import { KeyRound, Server } from "lucide-react";

export const examples = [
    {
        id: 1,
        method: 'ApiKey',
        verb: 'Get',
        description: 'Lista séries com api-key exposta.',
        color: 'orange',
        Icon: KeyRound,
    },
    {
        id: 2,
        method: 'SSR',
        verb: 'Get',
        description: 'Lista séries no SSR.',
        color: 'orange',
        Icon: Server,
    }
];

export const crud = [
    {
        id: 1,
        method: 'ApiKey',
        verb: 'Get',
        description: 'Lista series com api-key exposta.',
        color: 'orange',
        Icon: KeyRound,
    }
]