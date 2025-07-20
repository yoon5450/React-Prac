import supabase from "@/supabase/supabase";


export async function getAvartarUrl(userId:string):Promise<string|null>{
  // 전체 스토리지 버킷에서 100개 가져오기
  const {data:files, error:listError} = await supabase.storage
  .from('avatars')
  .list("", {
    limit:100
  })

  // 파일 불러오기 위해서 확인
  if(listError || !files){
    console.error('파일 불러오기 실패!')
    return null;
  }

  // userId로 시작하는 프로필사진 있는지 확인
  const matchedFile = files.find((file) => 
    file.name.startsWith(userId)
  )

  // 없으면 return
  if(!matchedFile){
    console.warn('해당하는 이미지가 없습니다.')
    return null;
  }

  // getUrl 이용해서 해당 이미지의 Url 가져오기
  const {data} = supabase
  .storage
  .from('avatars')
  .getPublicUrl(matchedFile.name)

  return data?.publicUrl || null;
}