function Clock({ locale }) {
    return <h1>{new Date().toLocaleTimeString(locale)}</h1>;
}

export default Clock;
