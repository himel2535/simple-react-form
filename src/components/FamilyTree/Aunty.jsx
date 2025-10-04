import React from 'react';
import Cousin from './Cousin';

const Aunty = () => {
    return (
        <div>
            <h5>aunty</h5>
            <section className='flex'>
                <Cousin name='TomTom'></Cousin>
                <Cousin name='Moja'></Cousin>
            </section>
        </div>
    );
};

export default Aunty;