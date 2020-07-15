declare namespace JSX{
    interface IntrinsicAttributes {
        collapse?:boolean,
        setCollapse?:React.Dispatch<React.SetStateAction<boolean>>
        switchClickEvent?:React.Dispatch<React.SetStateAction>
    }
}