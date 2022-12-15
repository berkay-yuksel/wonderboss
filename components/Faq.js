import faq from '../styles/Faq.module.css'

const Faq = ({ justLeave, onMouseEnter, onMouseLeave, clickableEnter }) => {
  return (
    <div className={faq.container}>
<h4></h4>
<div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>  
<p>WOOLWORTHS</p> <p>RESEARCH - STRATEGY</p><p>MORE+</p>
</div>
<div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>  
<p>WOOLWORTHS</p> <p>RESEARCH - STRATEGY</p><p>MORE+</p>
</div>
<div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>  
<p>WOOLWORTHS</p> <p>RESEARCH - STRATEGY</p><p>MORE+</p>
</div>
<div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>  
<p>WOOLWORTHS</p> <p>RESEARCH - STRATEGY</p><p>MORE+</p>
</div>
<div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>  
<p>WOOLWORTHS</p> <p>RESEARCH - STRATEGY</p><p>MORE+</p>
</div>
<div onMouseEnter={clickableEnter} onMouseLeave={justLeave}>  
<p>WOOLWORTHS</p> <p>RESEARCH - STRATEGY</p><p>MORE+</p>
</div>

    </div>
  )
}

export default Faq