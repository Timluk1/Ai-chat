import "./container.scss"

interface IContainerProps {
    children?: React.ReactNode
}

export default function Container({ children }: IContainerProps) {
  return (
    <div className="container">
        {children}
    </div>
  )
}
