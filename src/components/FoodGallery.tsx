import type { ImageProps } from '@/lib/cloudinary';

interface FoodGalleryProps {
    photos: ImageProps[];
}

const PhotoWithCaption = ({ photo }: { photo: ImageProps }) => {
    return (
        <div className='group relative'>
            <img src={photo.src} alt={photo.alt ?? 'food photo'} />
            <div className='absolute bottom-3 flex h-fit min-h-12 w-full items-center justify-center bg-zinc-900/75 px-4 py-1 text-center font-handwritten-2 text-lg text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:shadow-md'>
                {photo.alt}
            </div>
        </div>
    );
};

const FoodGallery = ({ photos }: FoodGalleryProps) => {
    return (
        <section className='w-auto rounded-xl bg-food-gradient drop-shadow-lg dark:bg-food-gradient-dark'>
            <div className='layout relative flex w-full px-4 py-8'>
                <div className='grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3'>
                    {photos.map((photo, index) => (
                        <PhotoWithCaption key={index} photo={photo} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FoodGallery;
