import Head from "next/head";

export interface Meta{
    description: string;
    author: string;
    siteName: string;
    ogImage: string;
    imageAlt: string;
    type: string;
}

interface Props{
    title: string;
    meta: Meta;
    url: string;
}

const AppHead: React.FC<Props> = ({title, meta, url}) =>{
    return(
        <Head>
            <title>{title}</title>
            <meta name="author" content = {meta.author} />
            <meta name="description" content = {meta.description} />
            <meta property="og:title" content = {title} />
            <meta property="og:description" content = {meta.description} />
            <meta property="og:image" content = {meta.ogImage} />
            <meta property="og:image:alt" content = {meta.imageAlt} />
            <meta property="og:url" content = {url} />
            <meta property="og:site_name" content = {meta.siteName} />
            <meta property="og:type" content = {meta.type} />
        </Head>
    )
}

export default AppHead;