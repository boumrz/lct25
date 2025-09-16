"use client";

import { Button, Container, Title, Text, Stack } from "@mantine/core";
import { useState } from "react";
import styles from "./page.module.css";

export default function HomePage() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <Container size="md" className={styles.container}>
      <Stack gap="xl" align="center">
        <Title order={1} className={styles.title}>
          Добро пожаловать в LCT25
        </Title>

        <Text size="lg" className={styles.description}>
          Это базовый проект на React + Next.js + TypeScript + Mantine UI
        </Text>

        <div className={styles.buttonSection}>
          <Button
            size="lg"
            onClick={handleButtonClick}
            className={styles.customButton}
          >
            Нажми меня! Счет: {count}
          </Button>
        </div>

        <Text size="sm" c="dimmed" className={styles.footer}>
          Проект настроен с CSS модулями и темизацией Mantine
        </Text>
      </Stack>
    </Container>
  );
}
