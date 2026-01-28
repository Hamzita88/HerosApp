import { RouterProvider } from 'react-router'
import { appRouter } from './router/app.routes'
const HerosApp = () => {
  return (
    <>
    <RouterProvider router={appRouter}/>
    </>
  )
}

export default HerosApp
