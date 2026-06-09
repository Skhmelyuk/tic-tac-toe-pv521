import type {Player} from "../types"

interface StatusProps {
    player: Player,
}

export function Status(props: StatusProps) {
    return (
        <div className="turn">Хід гравця {props.player}</div>
    )
}