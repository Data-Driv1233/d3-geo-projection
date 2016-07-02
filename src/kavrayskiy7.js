import {geoProjection} from "d3-geo";
import {pi,sqrt} from "./math";

export function kavrayskiy7Raw(lambda, phi) {
  return [
    3 * lambda / (2 * pi) * sqrt(pi * pi / 3 - phi * phi),
    phi
  ];
}

kavrayskiy7Raw.invert = function(x, y) {
  return [
    2 / 3 * pi * x / sqrt(pi * pi / 3 - y * y),
    y
  ];
};

export default function() {
  return geoProjection(kavrayskiy7Raw);
}