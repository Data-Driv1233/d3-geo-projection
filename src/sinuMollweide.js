import {geoProjection} from "d3-geo";
import {mollweideRaw} from "./mollweide";
import {sinusoidalRaw} from "./sinusoidal";

var sinuMollweidePhi = 0.7109889596207567,
    sinuMollweideY = 0.0528035274542;

export function sinuMollweideRaw(lambda, phi) {
  return phi > -sinuMollweidePhi
      ? (lambda = mollweideRaw(lambda, phi), lambda[1] += sinuMollweideY, lambda)
      : sinusoidalRaw(lambda, phi);
}

sinuMollweideRaw.invert = function(x, y) {
  return y > -sinuMollweidePhi
      ? mollweideRaw.invert(x, y - sinuMollweideY)
      : sinusoidalRaw.invert(x, y);
};

export default function() {
  return geoProjection(sinuMollweideRaw)
    .rotate([-20, -55])
    .scale(164.263)
    .center([0, -5.4036]);
}
