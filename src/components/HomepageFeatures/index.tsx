import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '개발자를 꿈꾸는 당신을 위하여',
    Svg: require('@site/static/img/dream.svg').default,
    description: (
      <>
        처음이라 무엇이든 낯설고 어려운 모든 이들을 위해 최대한 쉽고 친절하게 설명하겠습니다
      </>
    ),
  },
  {
    title: '당신의 시간은 소중하니까',
    Svg: require('@site/static/img/time.svg').default,
    description: (
      <>
        개념은 핵심 위주로, 실습은 빠르게 만들 수 있는 것 위주로 압축하여 설명하겠습니다  
      </>
    ),
  },
  {
    title: '함께 만드는 지식 보관소',
    Svg: require('@site/static/img/welcome.svg').default,
    description: (
      <>
        지식을 모을 동료를 언제나 환영합니다 <code>sce06147[AT]g.skku.edu</code>로 연락 바랍니다
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
