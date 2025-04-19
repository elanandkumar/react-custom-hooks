import { useMediaQuery } from "../hooks/useMediaQuery";

export const TestUseMediaQuery = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    
    return (
        <div>
            <p><strong>Test Use Media Query</strong></p>
            <p>{isMobile ? 'Mobile View' : 'Desktop View'}</p>
        </div>
    );
}