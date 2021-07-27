import SpeedSvg from '../assets/speed.svg';
import AccelerationSvg from '../assets/acceleration.svg';
import HorsepowerSvg from '../assets/power.svg';
import GasolineSvg from '../assets/gasoline.svg';
import EnergySvg from '../assets/energy.svg';
import HybridSvg from '../assets/hybrid.svg';
import StickShiftSvg from '../assets/stick_shift.svg';
import PeopleSvg from '../assets/people.svg';
import CarSvg from '../assets/car.svg';

export function getAccessoryIcon(type: string) {
  switch (type) {
    case 'speed':
      return SpeedSvg;
    case 'acceleration':
      return AccelerationSvg;
    case 'turning_diameter':
      return HorsepowerSvg;
    case 'gasoline_motor':
      return GasolineSvg;
    case 'electric_motor':
      return EnergySvg;
    case 'hybrid_motor':
      return HybridSvg;
    case 'exchange':
      return StickShiftSvg;
    case 'seats':
      return PeopleSvg;
    default:
      return CarSvg;
  }
}
