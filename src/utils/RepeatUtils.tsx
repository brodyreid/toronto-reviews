import { Fragment, ReactElement } from 'react';

export const repeater = (component: ReactElement, times: number) => {
	const keys = [...Array(times).keys()].map((x) => x++);

    return (
        <>
            {keys.map((key) => (
                <Fragment key={key}>
                    {component}
                </Fragment>
            ))}
        </>
    )
};
