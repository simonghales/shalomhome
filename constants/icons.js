
export type _iconData = {
  viewBox: string,
  paths: string[]
}

export const ICONS = {
  facebook: {
    slug: 'facebook',
    viewBox: '0 0 1024 1024',
    paths: [
      'M967.097 1023.597h-910.604c-31.207 0-56.493-25.297-56.493-56.493v-910.608c0-31.207 25.286-56.496 56.493-56.496h910.604c31.196 0 56.493 25.289 56.493 56.496v910.608c0 31.196-25.297 56.493-56.493 56.493zM706.259 1023.597v-396.388h133.055l19.92-154.482h-152.975v-98.63c0-44.726 12.418-75.205 76.558-75.205l81.805-0.038v-138.167c-14.152-1.879-62.709-6.086-119.202-6.086-117.944 0-198.687 71.991-198.687 204.202v113.925h-133.392v154.482h133.392v396.388h159.525z'
    ]
  },
  instagram: {
    slug: 'instagram',
    viewBox: '0 0 1024 1024',
    paths: [
      'M512 92.386c136.667 0 152.854 0.52 206.826 2.983 49.904 2.278 77.005 10.616 95.043 17.623 23.889 9.285 40.942 20.378 58.852 38.288s29.003 34.962 38.286 58.852c7.010 18.038 15.348 45.139 17.625 95.041 2.462 53.973 2.983 70.16 2.983 206.828s-0.52 152.854-2.983 206.826c-2.278 49.904-10.616 77.005-17.625 95.043-9.283 23.889-20.376 40.942-38.286 58.852s-34.962 29.003-58.852 38.286c-18.038 7.010-45.139 15.348-95.043 17.625-53.963 2.462-70.15 2.983-206.826 2.983s-152.862-0.52-206.826-2.983c-49.904-2.278-77.005-10.616-95.041-17.625-23.891-9.283-40.944-20.376-58.854-38.286s-29.003-34.962-38.286-58.852c-7.010-18.038-15.348-45.139-17.625-95.041-2.462-53.973-2.983-70.16-2.983-206.828s0.52-152.854 2.983-206.826c2.278-49.904 10.616-77.005 17.625-95.043 9.283-23.889 20.376-40.942 38.286-58.852s34.962-29.003 58.854-38.288c18.036-7.007 45.137-15.346 95.039-17.623 53.973-2.462 70.16-2.983 206.828-2.983zM512 0.161c-139.008 0-156.436 0.589-211.029 3.080-54.481 2.487-91.687 11.138-124.245 23.792-33.658 13.080-62.202 30.582-90.657 59.036s-45.956 56.999-59.036 90.657c-12.654 32.559-21.305 69.764-23.792 124.245-2.491 54.591-3.078 72.021-3.078 211.029s0.587 156.438 3.078 211.029c2.487 54.481 11.138 91.687 23.792 124.245 13.080 33.656 30.582 62.202 59.036 90.657s56.999 45.956 90.657 59.036c32.559 12.654 69.764 21.305 124.245 23.792 54.593 2.491 72.021 3.078 211.029 3.078s156.438-0.587 211.029-3.078c54.481-2.487 91.687-11.138 124.245-23.792 33.658-13.080 62.202-30.582 90.657-59.036s45.956-56.999 59.036-90.657c12.654-32.559 21.305-69.764 23.792-124.245 2.491-54.591 3.080-72.021 3.080-211.029s-0.589-156.438-3.080-211.029c-2.487-54.481-11.138-91.687-23.792-124.245-13.080-33.658-30.582-62.202-59.036-90.657s-56.999-45.956-90.657-59.036c-32.559-12.654-69.764-21.305-124.245-23.792-54.591-2.491-72.021-3.080-211.029-3.080z',
      'M512 249.163c-145.16 0-262.837 117.677-262.837 262.837s117.677 262.837 262.837 262.837c145.16 0 262.837-117.677 262.837-262.837s-117.677-262.837-262.837-262.837zM512 682.614c-94.226 0-170.614-76.388-170.614-170.614s76.388-170.614 170.614-170.614c94.226 0 170.614 76.388 170.614 170.614s-76.388 170.614-170.614 170.614v0zM846.641 238.779c0 33.922-27.498 61.422-61.42 61.422s-61.422-27.5-61.422-61.422c0-33.922 27.5-61.42 61.422-61.42s61.42 27.498 61.42 61.42z'
    ]
  },
  linkedin: {
    slug: 'linkedin',
    viewBox: '0 0 1024 1024',
    paths: [
      'M872.509 872.538h-151.747v-237.618c0-56.66-1.081-129.561-78.931-129.561-79.045 0-91.105 61.694-91.105 125.465v241.714h-151.69v-488.634h145.575v66.757h2.105c20.252-38.427 69.829-78.931 143.697-78.931 153.681 0 182.096 101.174 182.096 232.783v268.025zM227.805 317.061c-48.809 0-88.118-39.451-88.118-88.062 0-48.553 39.309-88.033 88.118-88.033 48.582 0 88.033 39.48 88.033 88.033 0 48.61-39.451 88.062-88.033 88.062zM151.747 872.538v-488.634h152.031v488.634h-152.031zM948.141 0h-872.623c-41.67 0-75.518 33.052-75.518 73.783v876.292c0 40.788 33.848 73.897 75.518 73.897h872.623c41.755 0 75.859-33.108 75.859-73.897v-876.292c0-40.731-34.104-73.783-75.859-73.783v0z'
    ]
  },
  product_hunt: {
    slug: 'product_hunt',
    viewBox: '0 0 1024 1024',
    paths: [
      'M1024 512c0 282.769-229.231 512-512 512s-512-229.231-512-512c0-282.769 229.231-512 512-512s512 229.231 512 512zM580.267 255.998v0.004l-247.467-0.004v512h102.4v-153.596l145.067-0.004c98.97 0 179.2-80.23 179.2-179.2s-80.23-179.2-179.2-179.2zM580.267 511.998v0.004h-145.067v-153.6l145.067-0.004c42.415 0 76.8 34.385 76.8 76.8s-34.385 76.8-76.8 76.8z'
    ]
  },
  twitter: {
    slug: 'twitter',
    viewBox: '0 0 1024 1229',
    paths: [
      'M1228.8 121.215c-45.208 20.564-93.8 34.462-144.79 40.705 52.040-31.992 92.019-82.652 110.844-143.020-48.716 29.63-102.666 51.138-160.094 62.731-45.982-50.244-111.501-81.631-184.013-81.631-139.223 0-252.107 115.74-252.107 258.501 0 20.261 2.23 39.993 6.531 58.913-209.523-10.78-395.287-113.699-519.623-270.1-21.701 38.179-34.136 82.589-34.136 129.966 0 89.689 44.507 168.812 112.153 215.169-41.325-1.342-80.198-12.972-114.186-32.332-0.025 1.077-0.025 2.155-0.025 3.251 0 125.247 86.901 229.728 202.23 253.48-21.154 5.91-43.426 9.072-66.417 9.072-16.245 0-32.041-1.625-47.432-4.643 32.078 102.699 125.178 177.444 235.5 179.523-86.28 69.339-194.98 110.668-313.098 110.668-20.349 0-40.415-1.229-60.137-3.616 111.569 73.346 244.083 116.149 386.451 116.149 463.706 0 717.287-393.91 717.287-735.523 0-11.208-0.252-22.353-0.737-33.441 49.263-36.453 92-81.977 125.798-133.821z'
    ]
  },
}

export function getIconData(iconName: string): string[] {
  return (ICONS.hasOwnProperty(iconName)) ? ICONS[iconName] : [];
}