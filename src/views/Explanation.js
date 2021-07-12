import react from 'react';

const Explanation = () => {
    return(
        <section id="explanation" className="explanation-container">
        <h2 className="explanation-title">Comenzamos...</h2>
        <h3 className="explanation-subtitle">La comunidad Fafafa</h3>
        <p className="explanation-p">La comunidad Fafafa se gobierna a si misma y su moneda de uso son los $FAF tokens.</p>
        <p className="explanation-p">Elige sus representantes una vez por año. ¿Como?</p>
        <p className="explanation-p">Se propone candidatos y se vota.</p>
        <p className="explanation-p">El presidente establece ciertas reglas y normas de la comunidad.</p>
        <p className="explanation-p">A saber: comisiones u impuestos por ciertas cosas, penalidades por otras, etc.</p>
        <p className="explanation-p">Los comunes acatan y hacen uso de sus $FAF tokens</p>
        <p className="explanation-p">Pero también pueden conspirar...</p>
        <button className="explanation-verMas">
          <a href="#detalles">+ data</a>
        </button>
      </section>
    )
}

export default Explanation;