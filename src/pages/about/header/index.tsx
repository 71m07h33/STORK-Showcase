import styles from './index.module.scss';

interface AboutHeaderProps {
    isMobile: boolean;
}

export const AboutHeader = ({ isMobile }: AboutHeaderProps) => {
    return (
        <div className={`${styles.header} ${isMobile ? styles.mobile : ''}`}>
            <h1>Forming Committee Spotlight</h1>
            <p>Discover the experts steering STORK toward open science excellence. <br /> Their diverse backgrounds unite to elevate research standards in movement sciences.</p>
        </div>
    )
};