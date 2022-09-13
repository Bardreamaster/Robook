import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Understand',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Robook是⼀份⾯向对机器⼈感兴趣新⽣的机器⼈扫盲⼿册和攻略.
      
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Robook致力于编辑、汇总南科大机器人方向入门、成长所必须的各种资料,
        让更多对机器人感兴趣的人了解、深入这一领域.
        ⼿册中既包括机器⼈学科的学习路线建议，也涵盖在南科⼤ 做机器⼈如何打怪升级的建议和经验.
      </>
    ),
  },
  {
    title: 'Powered by SUSTechers',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Robook由南科⼤学⽣贡献和总结我们希望通过这个⼿册,
        将我们学到的知识传递下去,为南科⼤⼯程师⽂化在学生群体中的建⽴提供⼀个平台.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
