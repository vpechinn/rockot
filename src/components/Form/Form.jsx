import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styles from '../Form/Form.module.scss';

const schema = yup.object().shape({
  name: yup.string().required('Имя обязательно').min(2, 'Минимум 2 символа'),
  phone: yup
    .string()
    .required('Телефон обязателен')
    .matches(/^\+?\d{10,15}$/, 'Неверный формат телефона'),
  email: yup.string().email('Неверный email').required('Email обязателен'),
  description: yup.string(),
  media: yup.mixed(),
});

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('phone', data.phone);
    formData.append('email', data.email);
    formData.append('description', data.description || '');

    if (data.media?.[0]) {
      formData.append('media', data.media[0]);
    }

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxG3q8FQWuNDMTa5lBC9pVtEiDOzQ1wgm-lj1UxEHxktf5ojiTFw0B1OblmjWhPeA7fPQ/exec',
        {
          method: 'POST',
          body: formData,
          redirect: 'follow',
        },
      );
      const result = await response.json();
      if (result.success) {
        alert('Форма отправлена!');
        reset();
      } else {
        alert('Ошибка: ' + result.error);
      }
    } catch (error) {
      alert('Ошибка отправки: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form} encType="multipart/form-data">
      <input {...register('name')} placeholder="Имя" className={styles.name} />
      {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      <input {...register('phone')} placeholder="Телефон" className={styles.phone} />
      {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
      <input {...register('email')} placeholder="Электронная почта" className={styles.email} />
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      <textarea
        {...register('description')}
        placeholder="Описание"
        className={styles.description}
      />
      {errors.description && <p className={styles.error}>{errors.description.message}</p>}
      {/* Поле для загрузки файла
      <input type="file" {...register('media')} className={styles.fileInput} />
      {errors.media && <p className={styles.error}>{errors.media.message}</p>} */}
      <button type="submit" className={styles.btn}>
        Отправить
      </button>
    </form>
  );
}

export default MyForm;
