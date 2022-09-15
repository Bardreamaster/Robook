import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [
  {
    title: '机器人手册',
    link: '/docs/handbook/intro_handbook',
    Svg: require('@site/static/img/hbk.svg').default,
    description: (
      <>
        机器人系统各部分知识扫盲与概述
      </>
      
    ),
  },
  {
    title: '资源分享',
    link: '/docs/resources/intro_res',
    Svg: require('@site/static/img/res.svg').default,
    description: (
      <>
        网络上的机器人知识干货分享
      </>
    ),
  },
  {
    title: '博客',
    link: '/blog',
    Svg: require('@site/static/img/blogs.svg').default,
    description: (
      <>
        南科大青年工程师们的机器人学习感悟，以及打怪升级的建议和经验
      </>
    ),
  },
];

function Feature({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <a href = {link} >
        <h3>{title}</h3>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
