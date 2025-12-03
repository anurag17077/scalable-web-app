export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 6;
};

export const validateName = (name) => {
  return name.trim().length >= 2 && name.trim().length <= 50;
};

export const validateTask = (task) => {
  const errors = {};

  if (!task.title || task.title.trim().length === 0) {
    errors.title = "Title is required";
  } else if (task.title.length > 100) {
    errors.title = "Title cannot exceed 100 characters";
  }

  if (!task.description || task.description.trim().length === 0) {
    errors.description = "Description is required";
  } else if (task.description.length > 500) {
    errors.description = "Description cannot exceed 500 characters";
  }

  return errors;
};

export const validateProfile = (profile) => {
  const errors = {};

  if (!profile.name || profile.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!validateEmail(profile.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};
