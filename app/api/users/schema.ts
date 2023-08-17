import { z } from 'zod';

const schema = z.object({
  name: z.string().min(3),
});

export default schema;