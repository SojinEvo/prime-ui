import { useState } from 'react';
import '@/styles/global.less';
import styles from './App.module.less';
import Button from '@/components/Button';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Vite + React + Less + CSS Module</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.counterCard}>
          <p className={styles.counterText}>点击次数：{count}</p>
          <Button
            type="primary"
            onClick={() => setCount(count + 1)}
            className={styles.counterButton}
          >
            点击 +1
          </Button>
          <Button type="danger" onClick={() => setCount(0)} style={{ marginLeft: 10 }}>
            重置
          </Button>
        </div>

        <div className={styles.buttonGroup}>
          <Button type="primary">主要按钮</Button>
          <Button type="default" style={{ marginLeft: 8 }}>
            默认按钮
          </Button>
          <Button type="danger" style={{ marginLeft: 8 }} disabled>
            禁用按钮
          </Button>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>基于 Vite 构建 · 样式隔离 + Less 预处理器</p>
      </footer>
    </div>
  );
};

export default App;
