import { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function PostImage({
    src,
    alt,
}: {
    src: string;
    alt?: string;
}) {
    const [isVertical, setIsVertical] = useState<boolean | null>(null);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setIsVertical(img.width / img.height < 1);
        };
    }, [src]);

    return (
        <div
            className={`flex justify-center overflow-hidden ${isVertical === null ? 'opacity-0' : ''}`}
        >
            <img
                src={src}
                alt={alt ?? 'Post image'}
                className={clsx(
                    'rounded-xl object-cover object-center',
                    isVertical ? 'w-full lg:mx-auto lg:w-2/3' : 'w-full'
                )}
            />
        </div>
    );
}
