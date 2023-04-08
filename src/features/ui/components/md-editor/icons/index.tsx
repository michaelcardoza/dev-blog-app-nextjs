import React from 'react';

type IconProps = {
  className?: string;
};

type BaseIconProps = IconProps & { children: React.ReactNode };

const BaseIcon: React.FC<BaseIconProps> = (props) => {
  const { className, children } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      width="48"
      viewBox="0 96 960 960"
      className={className}
    >
      {children}
    </svg>
  );
};

export const TitleIcon: React.FC<IconProps> = ({ className }) => (
  <BaseIcon className={className}>
    <path d="M430 896V356H200V256h560v100H530v540H430Z" />
  </BaseIcon>
);

export const BoldIcon: React.FC<IconProps> = ({ className }) => (
  <BaseIcon className={className}>
    <path d="M275 856V296h228q66 0 114.5 42T666 444q0 38-21 70t-56 49v6q43 14 69.5 50t26.5 81q0 68-52.5 112T510 856H275Zm86-76h144q38 0 66-25t28-63q0-37-28-62t-66-25H361v175Zm0-247h136q35 0 60.5-23t25.5-58q0-35-25.5-58.5T497 370H361v163Z" />
  </BaseIcon>
);

export const ItalicIcon: React.FC<IconProps> = ({ className }) => (
  <BaseIcon className={className}>
    <path d="M224 857v-80h134l139-409H338v-80h380v80H584L445 777h159v80H224Z" />
  </BaseIcon>
);

export const UnderlinedIcon: React.FC<IconProps> = ({ className }) => (
  <BaseIcon className={className}>
    <path d="M293 936q-14 0-28.5-5T239 918q-9-6-18.5-14t-20.5-8h-30v-60h30q14 0 28.5 5t25.5 13q9 6 18.5 14t20.5 8q11 0 21-7.5t19-14.5q11-8 25.5-13t28.5-5q14 0 28.5 5t25.5 13q9 6 18.5 14t20.5 8q11 0 21-7.5t19-14.5q11-8 25.5-13t28.5-5q14 0 28.5 5t25.5 13q9 6 19 14t21 8q11 0 20.5-7.5T707 854q11-8 25.5-13t28.5-5h30v60h-30q-11 0-21 7.5T721 918q-11 8-26 13t-29 5q-14 0-28-5t-25-13q-9-7-19-14.5t-21-7.5q-11 0-21 7.5T533 918q-11 8-25.5 13t-28.5 5q-14 0-28.5-5T425 918q-9-6-18.5-14t-20.5-8q-11 0-21 7.5T346 918q-11 8-25.5 13t-27.5 5Zm187-180q-101 0-170.5-69T240 518V196h80v324q0 66 46 111t114 45q68 0 114-45t46-111V196h80v322q0 100-69.5 169T480 756Z" />
  </BaseIcon>
);

export const ListBulletedIcon: React.FC<IconProps> = ({ className }) => (
  <BaseIcon className={className}>
    <path d="M377 858v-60h463v60H377Zm0-252v-60h463v60H377Zm0-253v-60h463v60H377ZM189 895q-28.05 0-48.025-19Q121 857 121 828.5t19.5-48q19.5-19.5 48-19.5t47.5 19.975Q255 800.95 255 829q0 27.225-19.387 46.612Q216.225 895 189 895Zm0-252q-28.05 0-48.025-19.681Q121 603.638 121 576t19.975-47.319Q160.95 509 189 509q27.225 0 46.613 19.681Q255 548.362 255 576t-19.387 47.319Q216.225 643 189 643Zm-1-253q-27.637 0-47.319-19.681Q121 350.638 121 323t19.681-47.319Q160.363 256 188 256q27.637 0 47.319 19.681Q255 295.362 255 323t-19.681 47.319Q215.637 390 188 390Z" />
  </BaseIcon>
);

export const ListNumberedIcon: React.FC<IconProps> = ({ className }) => (
  <BaseIcon className={className}>
    <path d="M120 976v-60h100v-30h-60v-60h60v-30H120v-60h120q17 0 28.5 11.5T280 776v40q0 17-11.5 28.5T240 856q17 0 28.5 11.5T280 896v40q0 17-11.5 28.5T240 976H120Zm0-280V586q0-17 11.5-28.5T160 546h60v-30H120v-60h120q17 0 28.5 11.5T280 496v70q0 17-11.5 28.5T240 606h-60v30h100v60H120Zm60-280V236h-60v-60h120v240h-60Zm189 431v-60h471v60H369Zm0-243v-60h471v60H369Zm0-243v-60h471v60H369Z" />
  </BaseIcon>
);

export const ChecklistIcon: React.FC<IconProps> = ({ className }) => (
  <BaseIcon className={className}>
    <path d="M222 842 80 700l42-42 100 99 179-179 42 43-221 221Zm0-320L80 380l42-42 100 99 179-179 42 43-221 221Zm298 244v-60h360v60H520Zm0-320v-60h360v60H520Z" />
  </BaseIcon>
);

export const LinkIcon: React.FC<IconProps> = ({ className }) => (
  <BaseIcon className={className}>
    <path d="M450 776H280q-83 0-141.5-58.5T80 576q0-83 58.5-141.5T280 376h170v60H280q-58.333 0-99.167 40.765-40.833 40.764-40.833 99Q140 634 180.833 675q40.834 41 99.167 41h170v60ZM325 606v-60h310v60H325Zm185 170v-60h170q58.333 0 99.167-40.765 40.833-40.764 40.833-99Q820 518 779.167 477 738.333 436 680 436H510v-60h170q83 0 141.5 58.5T880 576q0 83-58.5 141.5T680 776H510Z" />
  </BaseIcon>
);

export const QuoteIcon: React.FC<IconProps> = ({ className }) => (
  <BaseIcon className={className}>
    <path d="M580 556h160V396H580v160Zm-360 0h160V396H220v160Zm406 220 80-160H520V336h280v288l-76 152h-98Zm-360 0 80-160H160V336h280v288l-76 152h-98Zm34-300Zm360 0Z" />
  </BaseIcon>
);

export const CodeIcon: React.FC<IconProps> = ({ className }) => (
  <BaseIcon className={className}>
    <path d="M320 814 80 574l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z" />
  </BaseIcon>
);

export const ImageIcon: React.FC<IconProps> = ({ className }) => (
  <BaseIcon className={className}>
    <path d="M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Zm56-97h489L578 583 446 754l-93-127-117 152Zm-56 97V276v600Z" />
  </BaseIcon>
);
