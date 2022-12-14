import Meaning from '../../components/Meaning/Meaning';

import './Results.css';

export default function Results(props) {
    function handlePlay() {
        (props.audio).play();
    }

    if (props.results) {
        return (
            <>
                <div className="result-word">
                    <button onClick={ handlePlay } className={ props.audio ? "" : "btn-block" } disabled={ props.audio ? false : true } type="button" >
                        <i className="fa-solid fa-volume-high"></i>
                    </button>
                    <h2>{ props.results.word }</h2>
                    <p>{ props.results.phonetics[0].text }</p>
                </div>
                { props.results.meanings.map((meaning, index) => {
                    return (
                        <div key={ index } className="result-meaning">
                            <Meaning data={ meaning } />
                            {
                                (meaning.synonyms.length === 0) ? null :
                                <p className="syn-content"><strong>Synonyms:</strong> { meaning.synonyms.join(", ") }</p>
                            }
                        </div>
                    );
                })}
            </>
        );
    } else {
        return null;
    }
}  