import { Spin } from "antd";

export default function Loading (){
    return (
        <main>
            <Spin size="Large"/>
            <p>Caregando</p>
        </main>
    )
}