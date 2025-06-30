function Home() {
    return (
        <div className="body">
            <h2>Marisa! A partir de hoje não compro mais pipocas nem chupas para ninguém!😮‍💨</h2>
            <style jsx>{`
                .body {
                    background: #fff;
                    border-radius: 2rem;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                    padding: 2rem;
                    max-width: 400px;
                    margin: 2rem auto;
                    text-align: center;
                }
                h2 {
                    font-family: 'Comic Sans MS', cursive, sans-serif;
                }
            `}</style>
        </div>
    );
}

export default Home;
