import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from '../Form/Form.module.scss';

// Схема валидации
const schema = yup.object().shape({
  name: yup.string().required('Имя обязательно').min(2, 'Минимум 2 символа'),
  phone: yup
    .string()
    .required('Телефон обязателен')
    .matches(/^\+?\d{10,15}$/, 'Неверный формат телефона'),
  email: yup.string().email('Неверный email').required('Email обязателен'),
  description: yup.string(),
  media: yup.mixed().test('fileType', 'Загрузите фото или видео', (value) => {
    if (!value || value.length === 0) return true;
    const file = value[0];
    return ['image/', 'video/'].some((type) => file.type.startsWith(type));
  }),
});

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('phone', data.phone);
    formData.append('email', data.email);
    formData.append('description', data.description);
    formData.append('media', data.media[0]);

    // Пример отправки
    fetch('/api/submit', {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input {...register('name')} placeholder="Имя" className={styles.name} />
      {errors.name && <p>{errors.name.message}</p>}

      <input {...register('phone')} placeholder="Телефон" className={styles.phone} />
      {errors.phone && <p>{errors.phone.message}</p>}

      <input {...register('email')} placeholder="Электронная почта" className={styles.email} />
      {errors.email && <p>{errors.email.message}</p>}

      <textarea
        {...register('description')}
        placeholder="Описание"
        className={styles.description}
      />
      {errors.description && <p>{errors.description.message}</p>}

      <input type="file" {...register('media')} accept="image/*,video/*" className={styles.file} />
      {errors.media && <p>{errors.media.message}</p>}

      <button type="submit" className={styles.btn}>
        Отправить
      </button>
    </form>
  );
}

export default MyForm;
