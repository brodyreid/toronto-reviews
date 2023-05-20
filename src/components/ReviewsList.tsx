interface Props<T> {
    items: T[];
    renderItem: (item: T) => JSX.Element;
}

export default function ReviewsList<T,>(props: Props<T>) {
    const { items, renderItem } = props;

    return (
        <>
            {items.map(renderItem)}
        </>
    )
}