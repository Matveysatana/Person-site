

export interface SocialLinkProps {
    href: string,
    icon: React.ReactNode,
    brandColor: string,
    sttles?: string
}


export const socialLinks = [
    {
        href: "https://youtube.com/your-channel",
        icon: "",
        brandColor: "#FF0000"
    },
    {
        href: "https://t.me/your-telegram",
        icon: "",
        brandColor: "#0088cc"
    },
    {
        href: "https://tiktok.com/@your-tiktok",
        icon: "",
        brandColor: "#000000"
    },
    {
        href: "https://instagram.com/your-instagram",
        icon: "",
        brandColor: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"
    }
];