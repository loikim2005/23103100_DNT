import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MyApp() {
  const [hoTen, setHoTen] = useState('');
  const [mssv, setMssv] = useState('');
  const [email, setEmail] = useState('');
  const [sdt, setSdt] = useState('');
  const [matKhau, setMatKhau] = useState('');
  const [loi, setLoi] = useState({});

  const kiemTra = () => {
    const loiMoi = {};
    if (!hoTen.trim()) loiMoi.hoTen = 'Họ tên không được để trống';
    if (!mssv.trim()) loiMoi.mssv = 'Mã sinh viên không được để trống';
    if (!email.trim()) loiMoi.email = 'Email không được để trống';
    if (!sdt.trim()) loiMoi.sdt = 'Số điện thoại không được để trống';
    if (!matKhau.trim()) loiMoi.matKhau = 'Mật khẩu không được để trống';
    setLoi(loiMoi);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Text style={styles.title}>Thông tin sinh viên</Text>

        <ScrollView
          contentContainerStyle={styles.scrollVertical}
          showsVerticalScrollIndicator={true}
        >
          <ScrollView
            horizontal
            contentContainerStyle={styles.scrollHorizontal}
            showsHorizontalScrollIndicator={true}
          >
            <View style={styles.form}>
          <Text>Họ và tên</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập họ và tên"
            value={hoTen}
            onChangeText={setHoTen}
            onBlur={kiemTra}
          />
          {loi.hoTen ? <Text style={styles.error}>{loi.hoTen}</Text> : null}

          <Text>Mã sinh viên</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập mã sinh viên"
            value={mssv}
            onChangeText={setMssv}
            onBlur={kiemTra}
          />
          {loi.mssv ? <Text style={styles.error}>{loi.mssv}</Text> : null}

          <Text>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập email"
            value={email}
            onChangeText={setEmail}
            onBlur={kiemTra}
            autoCapitalize="none"
          />
          {loi.email ? <Text style={styles.error}>{loi.email}</Text> : null}

          <Text>Số điện thoại</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại"
            value={sdt}
            onChangeText={(text) => setSdt(text.replace(/[^0-9]/g, ''))}
            onBlur={kiemTra}
            keyboardType="numeric"
          />
          {loi.sdt ? <Text style={styles.error}>{loi.sdt}</Text> : null}

          <Text>Mật khẩu</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập mật khẩu"
            value={matKhau}
            onChangeText={setMatKhau}
            onBlur={kiemTra}
            secureTextEntry
          />
          {loi.matKhau ? <Text style={styles.error}>{loi.matKhau}</Text> : null}
            </View>
          </ScrollView>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    marginVertical: 20,
  },
  form: {
    paddingHorizontal: 20,
    width: 500,
  },
  scrollVertical: {
    flexGrow: 1,
  },
  scrollHorizontal: {
    flexGrow: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginTop: -8,
    marginBottom: 8,
  },
});