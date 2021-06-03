import { useRouter } from 'next/router';

const Link = ({ children, href }) => {
    const router = useRouter();
    return (
        <a
            href='#'
            onClick={(e) => {
                e.preventDefault();
                router.push(href);
            }}
        >
            {children}
            <style jsx>{`
                a {
                    margin-right: 10px;
                }
            `}</style>
        </a>
    );
};

export default Link;
