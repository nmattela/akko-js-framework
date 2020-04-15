import { AsyncComponent } from 'akko-js';

class AsyncTest extends AsyncComponent {

    constructor(props) {
        super(props);
    }


    calculatePrimes(iterations, multiplier) {
        const primes = [];
        for (let i = 0; i < iterations; i++) {
            const candidate = i * (multiplier * Math.random());
            let isPrime = true;
            for (let c = 2; c <= Math.sqrt(candidate); ++c) {
                if (candidate % c === 0) {
                    // not prime
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                primes.push(candidate);
            }
        }
        return primes;
    }

    async render() {
        this.calculatePrimes(500, 1000000000);
        return <h2>AsyncTest: {this.props.counter}</h2>;
    }
}

export default AsyncTest;