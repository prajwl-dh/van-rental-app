import {useRouteError} from 'react-router-dom'

export default function ErrorComponent(){
    const error = useRouteError()

    return(
        <div>
            {error.message}
        </div>
    )
}