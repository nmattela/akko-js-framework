import { AsyncComponent } from "@nmattela/akko";

class AsyncTest extends AsyncComponent {

    calculatePrimes(iterations, multiplier) {
        let primes = [];
        for (let i = 0; i < iterations; i++) {
            let candidate = i * (multiplier * Math.random());
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

    render() {
        this.calculatePrimes(200, 1000000000)
        return <h2>{this.props.counter}</h2>
    }
}

export default AsyncTest