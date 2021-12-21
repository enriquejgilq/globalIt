export interface IProductFeatured {
    category: number;
    code: string;
    /**
     * A short product description without HTML tags.
     */
    description_en: string;
    description_fr: string;
    description_pt: string;
    featured_product: boolean;
    general_category: number;
    id: number;
    image_principal: string;
    jpeg_150: string;
    jpeg_1200: string;
    long: number;
    short_description: string;
    tall: number;
    volume: number;
    webp_100: string;
    webp_210: string;
    webp_250: string;
    webp_330: string;
    webp_400: string;
    webp_800: string;
    webp_1200: string;
    weight: number;
    width: number;


}