import prisma from '../lib/prisma';
import bcrypt from 'bcryptjs';

async function resetAdminPassword() {
  try {
    // Email del administrador
    const email = 'admin@atlasnode.com';
    
    const user = await prisma.user.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        role: true
      }
    });

    if (!user) {
      console.log('Usuario no encontrado con el email:', email);
      return;
    }

    console.log('Usuario encontrado:', user);

    // Nueva contraseña para el administrador
    const newPassword = 'Admin123!';
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    // Actualizar la contraseña en la base de datos
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword }
    });
    
    console.log('Contraseña actualizada correctamente para', user.email);
    console.log('Nueva contraseña:', newPassword);
  } catch (error) {
    console.error('Error al restablecer la contraseña:', error);
  } finally {
    await prisma.$disconnect();
  }
}

resetAdminPassword().catch(console.error); 